from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(120), nullable=False, unique=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.first_name
        }
    
class ToDos(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(120), nullable=False)
    task = db.Column(db.String(120), nullable=False)
    notes = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<ToDos {self.task}>'

    def serialize(self):
        return {
            "id": self.id,
            "task": self.task,
            "status": self.status,
            "notes": self.notes
        }

class Memos(db.Model):
    __tablename__ = 'memos'
    id = db.Column(db.Integer, primary_key=True)
    memos = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<Memos {self.memos}>'

    def serialize(self):
        return {
            "id": self.id,
            "memos" : self.memos
        }

class Contacts(db.Model):
    __tablename__ = 'Contacts'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False, unique=False)
    last_name = db.Column(db.String(120), nullable=False, unique=False)
    phone = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    address = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<ToDos {self.task}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "email": self.email,
            "address": self.address
        }
