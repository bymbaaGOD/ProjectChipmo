import React from "react";
import rfidbanner from "../../assets/images/rfidbanner.jpg";
import rfidlogo from "../../assets/images/rfidlogo.jpg";
import rfidUseCase from "../../assets/images/rfidtag.jpg"; // RFID tag explanation image
import "./AboutRFID.css";

export default function AboutRFID() {
  return (
    <>
      <div className="Container">
        <div>
          <img src={rfidbanner} alt="RFID Banner" className="rfid-banner" />
        </div>

        <div className="Container-text">
          <div className="Container1">
            <div className="Title">RFID СУУРЬ ОЙЛГОЛТ</div>
            <div className="whitetext">
              RFID системийг ашиглахын тулд бүтээгдэхүүн бүрийг чип бүхий шошгожуулсан байх шаардлагатай...
            </div>
            <div className="whitetext">
              RFID уншигч нь суурин эсвэл хөдөлгөөнт төхөөрөмж байхаас үл хамаарч...
            </div>
            <div className="lastwhitetext">
              Системийн гол цөм нь хэрэглээний программ хангамж бөгөөд...
            </div>
          </div>

          <div className="rfid-section">
            <div className="rfid-left">
              <div className="rfid-title">RFID ШИЙДЭЛ НЬ ДАРААХ ХЭСГҮҮДЭЭС БҮРДДЭГ :</div>
              <ul className="rfid-list">
                <li>RFID шошго</li>
                <li>Уншигч төхөөрөмж</li>
                <li>Антенна</li>
                <li>Хэвлэгч төхөөрөмж</li>
                <li>Хэрэглээний програм хангамж</li>
              </ul>
            </div>
            <div className="rfid-right">
              <img src={rfidlogo} alt="RFID Logo" className="rfid-logo" />
            </div>
          </div>

          {/* ✅ RFID шошго тайлбар + зурагтай хэсэг (side-by-side layout) */}
          <div className="rfid-tag-block">
            <div className="rfid-tag-image">
              <img src={rfidUseCase} alt="RFID tag explanation" />
            </div>
            <div className="rfid-tag-text">
              <div className="secTitle">RFID ШОШГО</div>
              <div className="secwhitetext">
                RFID шошго нь богино дамжуулаг (IC) гэж нэрлэгддэг жижиг чипээс болон <br />
                үүнтэй холбогдсон антеннаас бүрдэнэ. Энэхүү антенна нь ихэвчлэн <br />
                цаасан дээр эсвэл PET (полиэтилен терефталат) биет дээр суурилагдсан <br />
                байдаг. Чип болон антенны хослолыг inlay гэж нэрлэдэг. Дараа нь энэхүү <br />
                inlay-ыг хэвлэмэл шошго болон түүний наалдамхай дэвсгэр хоёрын <br />
                хооронд байрлуулж эсвэл зориулалтаас нь хамааран илүү бат бөх <br />
                бүтэцтэй болгон ашигладаг.
              </div>
            </div>
          </div>
          <div className="rfid-tag-block2">
            <div className="rfid-tag-image">
              <img src={rfidUseCase} alt="IC" />
            </div>
            <div className="rfid-tag-text2">
              <div className="secTitle">TAG INTEGRATED CIRCUIT(IC)</div>
              <div className="secwhitetext">
                RFID шошго дахь чип буюу богино дамжуулагч (IC) нь шошгоны <br />
                чадамд чухал үүрэгтэй байдаг. Энэхүү нь чип үйлдвэрлэгчээс <br />
                олгосон шошго таних зорилготой TID буюу өвөрмөц серийн <br />
                дугаараар урьдчилан програмчлагдсан байдаг. Үүнээс гадны чип нь <br />
                бараа материалыг хянах болон удирдахад ашиглагддаг электрон <br />
                бүтээгдэхүүний код (EPC) хадгалах тусгай санах ойтой байдаг.
              </div>
            </div>
          </div>

          <div className="rfid-tag-block">
            <div className="rfid-tag-image">
              <img src={rfidUseCase} alt="EPC" />
            </div>
            <div className="rfid-tag-text">
              <div className="secTitle">ЭЛЕКТРОН БҮТЭЭГДЭХҮҮНИЙ КОД (EPC)</div>
              <div className="secwhitetext">
                RFID шошгоны чип дэх электрон бүтээгдэхүүний код (EPC) нь 24 HEX  <br />
                тэмдэгтээс бүрдсэн 16-тын кодыг ашигладаг өвөрмөц таних тэмдэг юм.  <br />
                цаасан дээр эсвэл PET (полиэтилен терефталат) биет дээр суурилагдсан <br />
                төрөл, өвөрмөц серийн дугаар зэрэг өөрийн хүссэн дэлгэрэнгүй ү <br />
                мэдээллийг хадгалж болно. Энэхүү код нь бараа материалыг мэдээллийн <br />
                сантай холбож, агуулахын хяналт, ложистикийн үйл явцыг илүү үр  <br />
                ашигтай болгох замаар дэлхий даяар хянах, удирдахад ашигладаг.
              </div>
            </div>
          </div>
          <div className="rfid-tag-block2">
            <div className="rfid-tag-image">
              <img src={rfidUseCase} alt="RFID tag antenna" />
            </div>
            <div className="rfid-tag-text2">
              <div className="secTitle">RFID ШОШГОНЫ АНТЕННА</div>
              <div className="secwhitetext">
                RFID шошгон дээрх антенна нь чипийг ажиллуулахын тулд энерги <br />
                дамжуулах үүрэгтэй. Антенна нь том байх тусам илүү их энерги <br />
                цуглуулж, унших зайг хол байлгадаг. Антеннүүд нь тодорхой <br />
                хэрэгцээнээс хамаарч өөр өөр байж бөгөөд зарим нь тодорхой <br />
                давтамжтай байх эсвэл шингэн, металл зэрэгт материалд <br />
                зориулагдсан байдаг. Тэдгээрийн дээр нь мэдээлэл хэвлэх эсвэл <br />
                код шарах зэрэг шаардлагаас хамаарч янз бүрийн хэлбэр, хэмжээ <br />
                эсхүл материалаар бүтээгдэж болно. Нэг антеннтай шошго нь дохио <br />
                хүлээн авах боломжгүй ба “ул уншигч орчин”-той байж болох ч хос <br />
                антеннтай шошго нь энэ төрлийн бүсийг арилгаж, найдвартай <br />
                ажиллагааг хангаж өгдөг.
              </div>
            </div>
          </div>
          <div className="rfid-tag-block">
            <div className="rfid-tag-image">
              <img src={rfidUseCase} alt="RFID scanner" />
            </div>
            <div className="rfid-tag-text">
              <div className="secTitle">RFID УНШИГЧ ТӨХӨӨРӨМЖ</div>
              <div className="secwhitetext">
                RFID уншигч нь шошгоны өгөгдлийг байгууллагын программ хангамжтай <br />
                холбоход маш чухал үүрэгтэй. Үүгээр тооллого, хайлт, анхан шатны өгөгдөл <br />
                дамжуулах гэх мэт маш чухал ажлуудыг ойр орчимын шошготой холбогдож <br />
                гүйцэтгэдэг. Chainway брэндийн C72, R5, UR4A, R3, M8N R20 зэрэг уншигчид нь
                өндөр чанар, найдвартай ажиллагаатай гэдгээрээ дэлхийн тэргүүлэгчдийн
                эгнээнд зүй ёсоор ордог. Эдгээр уншигчдыг хослуулсанаар төрөл бүрийн
                бизнесийн орчинд тулгарах асуудлуудыг цогцоор шийдвэрлэх чадвах бөгөөд
                их хэмжээний бараа материалыг ямар ч байгууллага ашиглах боломжтой юм.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
