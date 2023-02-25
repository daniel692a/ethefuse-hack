import Qrcode from "../components/qrcode"

export default function Payment(){
    return(
        <>
            <h1>
                Payment
            </h1>
            <Qrcode value = "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" />
        </>
    )
}