import React from "react";
import InfoCard from "../../components/InfoCard/infoCard"
import HorizontalCard from "../../components/HorizontalCard/horizontalCard"
import {HorizontalCard2} from "../../components/HorizontalCard/horizontalCard"
import CardImage1 from "../../assets/images/ChatGPT Image May 20, 2025, 11_36_45 AM.png";
import CardImage2 from "../../assets/images/P80手持场2 2.png";
import borluulalt from "../../assets/icons/borluulalt.png"
import tailan from "../../assets/icons/tailan.png"
import toollogo from "../../assets/icons/toollogo.png"
import tracking from "../../assets/icons/tracking.png"
import './systemPage.css'

    export default function ExamplePage() {
    return (
        <>
        <div className="bannerContainer" />
        <div className="header"><h2>CHIPMO SYSTEM</h2></div>
        <div className="firstContainer">
            <div style={{  display: "flex", justifyContent: "center" }}>
            <HorizontalCard
            image={CardImage1}
            title="Хэрхэн ажилладаг вэ?"
            description="RFID систем нь шошго, уншигч/кодлагч, программ хангамж гэсэн гурван үндсэн хэсгүүлээс бүрддэг.
                RFID шошго нь микрочип болон антеннаас бүрдэнэ. Энэхүү Шошго дээр хүссэн мэдээллээ хадгалах боломжтой байдаг.
                Уншигчид / кодлогч нь шошгоны антеннад энерги өгсөнөөр микрочип доторх мэдээллийг төхөөрөмж нь өөрлүүгээ татаж авдах зарчимаар ажилладаг.
                Үүний эдгээр бүх өгөгдлийг RFID програм хангамж нэгтгэж, аливаа дүн шинжилгээ хийх, тайлан боловсруулах, тооллого хийх мөн ERP-тэй холбогдох зэрэг чухал  ажлыг хариуцдаг.  "
            />
            </div>
        </div>

        <div className="firstContainer">
            <HorizontalCard2
            image={CardImage2}
            title="Хэрхэн хэрэгжүүлэх вэ?"
            subTitle="Chipmo системийг нэвтүүлэх нь энгийн бөгөөд шуурхай байх болно."
            description1="нэвтрүүлэлтийн энгийн болгохын тулд манай баг таныг алхам бүрийг удирдан чиглүүлнэ: "
            description2='Алхам 1: "уулзалт - Бид таны хэрэгцээнд дүн шинжилгээ хийж, тохирсон шийдлийг боловсруулна."'
            description3='Алхам 2: "нэвтрүүлэлт - Манай баг системийн өгөгдлүүдийг оруулж, зохих тохируулгуудыг хийнэ."'
            description4='Алхам 3: "Сургалт - Бид танай ажилтнуудад цогц сургалт орж, гарын авлагын хамт хүлээлгэн өгнө."'
            description5='Алхам 4: "Арчилгаа - урт хугацаанд тасралтгүй хамтран ажиллана."'
            />
        </div>  
        <div className="header"><h2>ҮНДСЭН БОЛОМЖУУД</h2></div>
        <div className="verticalCard">
            <InfoCard 
              image={toollogo}
              title="ТООЛЛОГЫН АЖИЛ:"
              description="CHIPMO - RFID системийн тусламжтайгаар тооллогын ажилаа хялбарчилж, Бараа материалыг хурдан бөгөөд үнэн зөв тоолж, цаг хугацаа хэмнэж, мөн алдааг багасгана."
            />
            <InfoCard 
              image={borluulalt}
              title="БОРЛУУЛАЛТ ХЯНАЛТ:"
              description="CHIPMO - RFID системийн тусламжтайгаар тооллогын ажилаа хялбарчилж, Бараа материалыг хурдан бөгөөд үнэн зөв тоолж, цаг хугацаа хэмнэж, мөн алдааг багасгана."
            />
            <InfoCard 
              image={tracking}
              title="Real-time Inventory Tracking:"
              description="CHIPMO - RFID системийн тусламжтайгаар тооллогын ажилаа хялбарчилж, Бараа материалыг хурдан бөгөөд үнэн зөв тоолж, цаг хугацаа хэмнэж, мөн алдааг багасгана."
            />
            <InfoCard 
              image={tailan}
              title="НАРИЙВЧИЛСАН ТАЙЛАН:"
              description="CHIPMO - RFID системийн тусламжтайгаар тооллогын ажилаа хялбарчилж, Бараа материалыг хурдан бөгөөд үнэн зөв тоолж, цаг хугацаа хэмнэж, мөн алдааг багасгана."
            />
        </div>
        <div className="header"><h2>ДАВУУ ТАЛУУД</h2></div>
        <div className="firstContainer">
            <HorizontalCard2
            image={CardImage2}
            description1="нэвтрүүлэлтийн энгийн болгохын тулд манай баг таныг алхам бүрийг удирдан чиглүүлнэ: "
            description2='Алхам 1: "уулзалт - Бид таны хэрэгцээнд дүн шинжилгээ хийж, тохирсон шийдлийг боловсруулна."'
            description3='Алхам 2: "нэвтрүүлэлт - Манай баг системийн өгөгдлүүдийг оруулж, зохих тохируулгуудыг хийнэ."'
            description4='Алхам 3: "Сургалт - Бид танай ажилтнуудад цогц сургалт орж, гарын авлагын хамт хүлээлгэн өгнө."'
            description5='Алхам 4: "Арчилгаа - урт хугацаанд тасралтгүй хамтран ажиллана."'
            />
        </div>  
        </>
    );
    }