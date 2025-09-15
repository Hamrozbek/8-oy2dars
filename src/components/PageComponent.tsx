import { Button } from "antd"
import { ArrowLeftOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import type { PageComponentType } from "../@Types/PageComponentType"


const PageComponent = ({ title }:PageComponentType) => {
    const navigate = useNavigate()

    return (
        <div className="flex justify-between items-center p-5">
            <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)} className="flex items-center">Orqaga</Button>
            <h2 className="font-bold text-white text-[25px]">{title} ro'yxati</h2>
        </div>
    )
}

export default PageComponent
