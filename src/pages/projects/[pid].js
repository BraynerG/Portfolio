import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import LangPage from "../../components/LangPage";
import { projectCard } from "../../components/Templates";
import { DiReact } from "react-icons/di";

const Language = () => {
    const router = useRouter()
    const { pid } = router.query
    
    const projectsDB = {
        "Javascript":[
            {title:"New look",description:"App for organization and make appoinments",img:DiReact, url:"https://mycityhome.es/", isSvg:true}
        ]
    }
    
    return(
        <Layout>
            <LangPage language={pid} projects={(()=>{
                var res = []
                if(projectsDB[pid])
                projectsDB[pid].forEach(project => {
                    res.push(projectCard(project))
                });
                return res
            })}></LangPage>
        </Layout>
    )
}
export default Language