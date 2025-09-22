import { use } from "react";
import DisplayCompany from "./displayCompany";

export default function CompanyDetails ({companyDetail}){
    const newList = use (companyDetail);
    
    
    return (
        <>
        {newList.map(list=><DisplayCompany key={list.id} list={list}></DisplayCompany>)}
        </>
    )
}