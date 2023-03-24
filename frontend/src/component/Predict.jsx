import { Container, FormLabel, Heading,Stack, HStack, Input,Text, VStack, Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Predict() {
    const [preg,setPreg]=useState("")
    const [glucose,setGlucose]=useState("")
    const [BP,setBP]=useState("")
    const [skinThickness,setSkinThickness]=useState("")
    const [insulin,setInsulin]=useState("")
    const [BMI,setBMI]=useState("")
    const [dPF,setDPF]=useState("")
    const [age,setAge]=useState("")
    const [result,setResult]=useState(0)
    const data={
        "Pregnancies":preg,
        "Glucose":glucose,
        "BloodPressure":BP,
        "SkinThickness":skinThickness,
        "Insulin":insulin,
        "BMI":BMI,
        "DiabetesPedigreeFunction":dPF,
        "Ages":age
     }
const predict=async()=>{
  const res=await axios.post("/api/predict",data)
  setResult(res.data["reslut"])
  console.log(result)
 if(res&&result===0)
   toast.success("wow!,You have not diabetes,Enjoy your healthy life", {
    position: toast.POSITION.TOP_CENTER
  })
else if(res&&result==1){
    toast.warn("oh no!,You have diabetes,Contact doctor as earlier possible", {
        position: toast.POSITION.TOP_CENTER
      })
  }
}
  return (
    <div style={{background:"radial-gradient(circle, rgba(0,147,255,1) 0%, rgba(35,169,180,1) 99%)"}}>
    <Container minH={"100vh"} maxW={['container.lg','container.md']}padding={["10","20"]}>
    <form>
    <Box backgroundColor={"white"}  p={"3"} borderRadius={"10"} boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}>
    <Heading mb={"4"} children="Diabetes Predictions"></Heading>
    <VStack spacing={"4"} alignItems={"flex-start"}>
    
    <HStack>
    <Text fontWeight={"bold"} size={"md"}>pregnancies:</Text>
    <Input required type={"text"} value={preg} onChange={e=>setPreg(e.target.value)}/>
    </HStack>
    <HStack>
    <Text fontWeight={"bold"} size={"md"}>Glucose:</Text>
    <Input required type={"text"} value={glucose} onChange={e=>setGlucose(e.target.value)}/>
    </HStack>
    <HStack>
    <Text fontWeight={"bold"} size={"md"}>Blood Pressure:</Text>
    <Input required type={"text"} value={BP} onChange={e=>setBP(e.target.value)}/>
    </HStack>
    <HStack>
    <Text fontWeight={"bold"} size={"md"}>Skin Thickness:</Text>
    <Input required type={"text"} value={skinThickness} onChange={e=>setSkinThickness(e.target.value)}/>
    </HStack>
    <HStack>
    <Text fontWeight={"bold"} size={"md"}>Insulin:</Text>
    <Input required type={"text"} value={insulin} onChange={e=>setInsulin(e.target.value)}/>
    </HStack>
    <HStack>
    <Text fontWeight={"bold"} size={"md"}>BMI:</Text>
    <Input required type={"text"} value={BMI} onChange={e=>setBMI(e.target.value)}/>
    </HStack>
    <Stack  direction={["column","row"]}>
    <HStack spacing={0}>
    <Text fontWeight={"bold"} size={"md"}>Diabetes Pedigree Functions</Text>
    <Text  size={"md"}>(range:0-1)</Text>
    </HStack>
    <Input required maxW={"40"} type={"text"} value={dPF} onChange={e=>setDPF(e.target.value)}/>
    </Stack>
    <HStack>
    <Text fontWeight={"bold"} size={"md"}>Age:</Text>
    <Input required type={"text"} value={age} onChange={e=>setAge(e.target.value)}/>
    </HStack>
    <Button colorScheme={"teal"} onClick={predict}>Predict</Button>
    <ToastContainer/>
        </VStack>
    </Box>
    </form>
    </Container>
    </div>
  )
}

export default Predict