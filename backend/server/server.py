from flask import Flask,request,jsonify
from flask_cors import CORS
import  util
app=Flask(__name__)
CORS(app)
@app.route('/')
def hello():
    return "hello"
@app.route('/predict',methods=['POST'])
def get_result():
    data=request.json
    preg=float(data["Pregnancies"])
    glucose = float(data["Glucose"])
    bp = float(data["BloodPressure"])
    skinthickness = float(data["SkinThickness"])
    insulin = float(data["Insulin"])
    BMI = float(data["BMI"])
    DPF = float(data["DiabetesPedigreeFunction"])
    age = float(data["Ages"])
    response=jsonify({
        "reslut":float(util.predict(preg,glucose,bp,skinthickness,insulin,BMI,DPF,age))
    })
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__=="__main__":
    app.run(debug=True,host='0.0.0.0')
