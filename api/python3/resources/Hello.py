from flask_restful import Resource

class Hello(Resource):
    def get(self):
        return {"message": "[Get] Hello World!"}

    def post(self):
        return {"message": "[Post] Hello World!"}

    def put(self):
        return {"message": "[Put] Hello World!"}

    def delete(self):
        return {"message": "[Delete] Hello World!"}