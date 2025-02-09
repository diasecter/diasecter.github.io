import geopandas as gpd

# Load GeoJSON files
regions = gpd.read_file('data/regions.geojson')  # Regions GeoJSON
provinces = gpd.read_file('data/provinces.geojson')  # Provinces GeoJSON

# Ensure both datasets have the same CRS
regions = regions.to_crs("EPSG:4326")
provinces = provinces.to_crs("EPSG:4326")

# Validate geometries and fix if necessary
regions['geometry'] = regions['geometry'].apply(lambda geom: geom.buffer(0) if not geom.is_valid else geom)
provinces['geometry'] = provinces['geometry'].apply(lambda geom: geom.buffer(0) if not geom.is_valid else geom)

# Create a mapping of province to region
province_to_region = {}

for _, province in provinces.iterrows():
    for _, region in regions.iterrows():
        if province.geometry.within(region.geometry):
            province_to_region[province['name:fr']] = region['name:fr']
            break

# Print the mapping
for province, region in province_to_region.items():
    print(f"Province '{province}' is inside Region '{region}'")
