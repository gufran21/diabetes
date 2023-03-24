import pickle
__model=None

def get_model():
    global __model
    with open("../model/model.pkl","rb") as f:
        __model =pickle.load(f)


def predict(preg,glucose,bp,skinthickness,insulin,BMI,DPF,age):
    get_model()
    return  __model.predict([[preg,glucose,bp,skinthickness,insulin,BMI,DPF,age]])[0]

if __name__=="__main__":
    get_model()

