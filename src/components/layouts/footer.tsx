import Link from "next/link";

export function Footer() {
    return (
        <section className="w-full py-5 border-t-[1px] border-solid">
            <div className="container">
                <div className="flex flex-row justify-between">
                    <span>Todos os Direitos Reservado Explorer Call Center</span>
                    <Link href={"/politica-de-privacidade"}>Política de Privacidade</Link>
                </div>
            </div>
        </section>
    )
}