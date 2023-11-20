import Image from "next/image";
import Link from "next/link";
import musicaImg from "../../../../public/notamusica.png"

export default function Post(){
    return(
        <Link href="/player">
            <div className="flex flex-col justify-center">
            <Image src={musicaImg} alt="" width={50} height={50}/>
            <p className="self-end">0:26</p>
            <p className="text-sm">PodCast</p>
            <p className="text-sm">Author</p>
            </div>
        </Link>
    )
}