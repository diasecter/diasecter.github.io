const map = L.map('map').setView([31.7917, -7.0926], 6);

// Add a base tile layer (satellite-style)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: "Tiles © Esri — Source: Esri, DeLorme, NAVTEQ",
}).addTo(map);
// Add scale control to the map
L.control.scale({
    position: 'bottomleft', // Position of the scale on the map
    metric: true,          // Use metric units
    imperial: true        // Disable imperial units
}).addTo(map);

// Function to define the initial style of GeoJSON features
function style(feature) {
    return {
        fillColor: 'red',       // Initial fill color
        color: 'black',         // Initial border color
        weight: 1,              // Border width
        fillOpacity: 0.6        // Initial fill opacity
    };
}

// Function to define hover effects
function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
        fillColor: 'green',    // Hover fill color
        color: 'white',        // Hover border color
        weight: 2,             // Hover border width
        fillOpacity: 0.8       // Hover fill opacity
    });
}

// Function to reset style on hover out
function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
}

// Default language for tooltips
let currentLanguage = 'name:fr';

// Function to bind hover and click events to each feature
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,  // Hover in
        mouseout: resetHighlight,     // Hover out
    });
}

// Add the GeoJSON layer with the defined styles and events
const geojsonLayer = L.geoJSON(null, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// Function to load GeoJSON files dynamically
function loadGeoJSON(url, existingLayer) {
    if (existingLayer) {
        map.removeLayer(existingLayer);
    }

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const layer = L.geoJSON(data, {
                style: style,           // Apply initial style
                onEachFeature: onEachFeature // Bind hover events
            }).addTo(map);

            return layer;
        });
}

// Bind events and tooltips to each feature
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,  // Highlight on hover
        mouseout: resetHighlight,     // Reset style on hover out
    });

    // Add a tooltip showing the name in the selected language
    const tooltipName = feature.properties[currentLanguage] || feature.properties['name:fr']; // Fallback to French
    layer.bindTooltip(tooltipName, {
        permanent: false,        // Tooltip appears only on hover
        direction: 'top',        // Tooltip direction
        className: 'custom-tooltip' // Optional CSS class for styling
    });
}


// Zoom event handler
map.on('zoomend', async () => {
    const zoomLevel = map.getZoom();

    // Regions: Zoom levels 5-6
    if (zoomLevel >= 5 && zoomLevel <= 6) {
        if (!regionsLayer) {
            regionsLayer = await loadGeoJSON('/data/region.geojson', regionsLayer);
        }
        if (provincesLayer) {
            map.removeLayer(provincesLayer);
            provincesLayer = null;
        }
    }

    // Provinces: Zoom levels 7-8
    else if (zoomLevel >= 7) {
        if (!provincesLayer) {
            provincesLayer = await loadGeoJSON('/data/province.geojson', provincesLayer);
        }
        if (regionsLayer) {
            map.removeLayer(regionsLayer);
            regionsLayer = null;
        }
    }
});

// Function to set the current language
function setLanguage(language) {
    currentLanguage = language;

    // Reload the current GeoJSON layer with updated tooltips
    if (regionsLayer) {
        map.removeLayer(regionsLayer);
        loadGeoJSON('/data/region.geojson').then(layer => {
            regionsLayer = layer;
        });
    }
    if (provincesLayer) {
        map.removeLayer(provincesLayer);
        loadGeoJSON('/data/province.geojson').then(layer => {
            provincesLayer = layer;
        });
    }
}

// Custom dropdown logic
const dropdown = document.querySelector('.dropdown');
const selected = dropdown.querySelector('.selected');
const optionsContainer = dropdown.querySelector('.options');

// Toggle dropdown visibility
selected.addEventListener('click', () => {
    optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
});

// Set language when an option is clicked
optionsContainer.addEventListener('click', (e) => {
    const lang = e.target.dataset.lang;
    if (lang) {
        selected.textContent = e.target.textContent; // Update selected text
        setLanguage(lang); // Update language
        optionsContainer.style.display = 'none'; // Close dropdown
    }
});

// Load the initial GeoJSON for regions
let regionsLayer = null;
let provincesLayer = null;
loadGeoJSON('/data/region.geojson').then(layer => {
    regionsLayer = layer;
});

