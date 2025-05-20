import React from "react";
import InfoCard from "../../components/InfoCard/infoCard"
import HorizontalCard, { HorizontalCard3, HorizontalCard3_1 } from "../../components/HorizontalCard/horizontalCard"
import {HorizontalCard2} from "../../components/HorizontalCard/horizontalCard"
import CardImage1 from "../../assets/images/how it work.jpg";
import CardImage2 from "../../assets/images/rfid_usage.png";
import borluulalt from "../../assets/icons/borluulalt.png"
import tailan from "../../assets/icons/tailan.png"
import toollogo from "../../assets/icons/toollogo.png"
import tracking from "../../assets/icons/tracking.png"
import cloud from "../../assets/icons/Cloud.png"
import lowcode from "../../assets/icons/low-code.png"
import RFID from "../../assets/icons/rfid1.png"
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
            <HorizontalCard3
            image={cloud}
            title="CLOUD SYSTEM:"
            description1="1. Уян хатан байдал болон өргөтгөх боломж: "
            description2='Бизнесийнхээ өсөн нэмэгдэж буй эрэлт хэрэгцээг хангахын тулд нөөц бололцоондоо тааруулан хялбар үүлэн систем ашиглах. Ямар ч саадгүйгээр шаардлагатай үедээ датабаазыг өргөтгөж болно.'
            description3='2. Аюулгүй болон найдвартай ажиллагаа:'
            description4='Манай шийдлүүд нь таны өгөгдлийг хамгаалахын тулд найдвартай хамгаалалтын стандардуудыг дагаж мөрддөг  бөгөөд байнгын бэлэн байдал байж, халдлагаас сэргийлдэг.'
            description5='3. Зардал багатай:' 
            description6='Манай үүлэн системийг ашиглан мэдээллийн технологийн зардлыг эрс бууруулж, зөвхөн ашиглаж буй нөөцийнхөө төлбөрийг төлж, өртөг өндөртэй техник хангамжид хөрөнгө оруулалт хийх шаардлагагүй болно.'
            />
        </div>  
        <div className="firstContainer">
            <HorizontalCard3
            image={RFID}
            title="RFID:"
            description1="1. БОДИТ, ИЛ ТОД МЭДЭЭЛЭЛ: "
            description2='Бараа материал, эд хөрөнгөө бодит цагын горимоор хянаж, удирдаж, тэдгээрийн байршил, төлөвүүдийн талаарх хамгийн сүүлийн үеийн найдвартай мэдээллэтэй байна.'
            description3='2. ӨНДӨР ОНОВЧЛОЛ:'
            description4='мэдээллИЙГ автоматаар цуглуулах замаар бараа материалын нарийвчлалыг сайжруулж, гар ажиллагааНААС ҮҮДДЭГ алдааг бууруулна.'
            description5='3. САЙЖРУУЛСАН АЮУЛГҮЙ БАЙДАЛ:' 
            description6='Нарийвчлалтай хянаЛТТАЙ БАЙХ НЬ ТАНЫ хөрөнгийн аюулгүй байдлыг сайжруулж, шалтгаангүй хорогдол, хулгайгаас найдвартай урьдчилан сэргийлНЭ.'
            />
        </div>  
        <div className="firstContainer">
            <HorizontalCard3
            image={lowcode}
            title="LOW-CODE:"
            description1="1. ТҮРГЭН НЭВТРҮҮЛЭЛТ"
            description2='Манай low code бүхийн платформыг ашиглан програмуудыг хурдан өөрчилж, сайжруулж, сервер дээр байршуулж, нэвтрүүлэлт хийх хугацааг богино болгодог.'
            description3='2. ӨӨРИЙН ОНЦЛОГТ ТААРУУЛАХ'
            description4='Уламжлалт хөгжүүлэлт хийхгүйгээр та өөрийн бизнесийн хэрэгцээ шаардлагад нийцүүлэн манай системийг тохируулж, өөрийн үйл ажиллагаандаа талбарын түвшинд төгс хослуулах боломжтой.'
            description5='3. ХОЛБОЛТ ХИЙХ БОЛОМЖУУД' 
            description6='Одоо ашиглаж буй систем, программ хангамжтай маш хялбархан api түвшинд холбогдож, одоогын үйл ажиллагаатайгаа ямар нэгэн хүндрэл бэршээлгүйгээр бүтээмжээ илүү нэмэгдүүлэх боломжийг бид таньд олгоно.'
            />
        </div>  
        </>
    );
    }