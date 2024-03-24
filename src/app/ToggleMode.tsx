
'use client'
import  React,{useState,useEffect} from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {Button} from '../components/ui/button'

export default function ToggleMode() {
    const {theme,setTheme}=useTheme();
    const [mount,setMount]=useState(false)

    useEffect(()=>{
        setMount(true)
    },[]);

    if(!mount){
        return <Button variant={"secondary"} size={"icon"} disabled={true} ></Button>
    }

    const dark =theme==='dark'


  return <Button variant={"secondary"} size={"icon"} onClick={()=>setTheme(`${dark?'light':"dark"}`)} >{dark?(<Sun/>):(<Moon/>)}</Button>
}
