import { NextResponse } from "next/server";

const data_source_url="http://127.0.0.1:8000/api/menu/menu-list/"

export async function POST(request){
    const {actualData}=await request.json()

    if (!actual) {
        return NextResponse.json({"message":"Missing required Data"})
    }
    const res=await fetch(data_source_url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(actualData)
    })

    const newMenu=await res.json()
    return NextResponse.json(newMenu)
}