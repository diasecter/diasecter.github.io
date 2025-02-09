from flask import Flask, render_template, redirect, url_for, flash, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from config import Config
from models import db, User
from forms import LoginForm, RegistrationForm
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from flask_login import login_user
from flask import render_template
from flask_login import current_user, login_required
from datetime import datetime
from flask import send_from_directory



app = Flask(__name__)
app.config.from_object(Config)


@app.context_processor
def inject_year():
    return {'current_year': datetime.now().year}

# Initialize extensions
db.init_app(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/')
@login_required
def index():
    initials = f"{current_user.first_name[0].upper()}{current_user.last_name[0].upper()}"
    return render_template('index.html', initials=initials, user=current_user)

@app.route('/header')
@login_required
def header():
    # Extract user details from the logged-in user
    first_name = current_user.first_name
    last_name = current_user.last_name
    email = current_user.email
    initials = f"{first_name[0].upper()}{last_name[0].upper()}"
    return render_template('header.html', first_name=first_name, last_name=last_name, email=email, initials=initials)


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None  # Initialize error as None

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # Fetch user from the database
        user = User.query.filter_by(email=email).first()

        # Check if user exists and password is correct
        if user and check_password_hash(user.password, password):
            login_user(user)
            flash('Connexion réussie!', 'success')
            return redirect(url_for('index'))
        else:
            error = 'Email ou mot de passe incorrect.'  # Set error message for invalid login

    # Render the login page with the error (if any)
    return render_template('login.html', error=error)


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Get form data
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        # Check for missing fields
        if not first_name or not last_name or not email or not password or not confirm_password:
            flash('Tous les champs doivent être remplis.', 'danger')
            return render_template('signup.html')

        # Check if passwords match
        if password != confirm_password:
            flash('Les mots de passe ne correspondent pas.', 'danger')
            return render_template('signup.html')

        # Check if email already exists
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            flash('Cet email est déjà utilisé.', 'danger')
            return render_template('signup.html')

        # Hash the password
        hashed_password = generate_password_hash(password, method='sha256')

        # Create a new user
        new_user = User(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=hashed_password
        )
        db.session.add(new_user)
        db.session.commit()

        flash('Compte créé avec succès. Veuillez vous connecter.', 'success')
        return redirect(url_for('login'))

    return render_template('signup.html')
    


@app.route('/forgotpassword', methods=['GET', 'POST'])
def forgotpassword():
    if request.method == 'POST':
        email = request.form.get('email')
        user = User.query.filter_by(email=email).first()
        if user:
            # Logic to send reset email (implement your email system)
            flash("Un email de réinitialisation a été envoyé.", "success")
        else:
            flash("Aucun utilisateur avec cet email n'a été trouvé.", "danger")
        return redirect(url_for('forgotpassword'))
    return render_template('forgotpassword.html')
    


@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Vous êtes déconnecté.', 'info')
    return redirect(url_for('login'))

@app.route('/data/<path:filename>')
def serve_data(filename):
    return send_from_directory('data', filename)


@app.route('/diasecter', methods=['GET'])
@login_required
def diasecter():
    initials = f"{current_user.first_name[0].upper()}{current_user.last_name[0].upper()}"
    return render_template('diasecter.html', initials=initials, user=current_user)

@app.route('/map')
@login_required
def map():
    initials = f"{current_user.first_name[0].upper()}{current_user.last_name[0].upper()}"
    return render_template('map.html', initials=initials, user=current_user)


@app.route('/dashboard')
@login_required
def dashboard():
    initials = f"{current_user.first_name[0].upper()}{current_user.last_name[0].upper()}"
    return render_template('dashboard.html', initials=initials, user=current_user)


if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables if they don't exist
    app.run(debug=True)
