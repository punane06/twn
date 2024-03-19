import Image from "next/image";
import Link from "next/link";
import FileIcon from "./FileIcon";
import PhotoIcon from "./PhotoIcon";
import QuestionIcon from "./QuestionIcon";
import TableIcon from "./TableIcon";

export const Navbar = () => {
    return (
        <nav className="relative uppercase z-30 p-[25px]  w-[250px] h-screen text-twnTextColor">
            <Link href="/">
                <Image src="/twn-logo.svg" alt="logo" width={180} height={180} className="mt-[25px] mb-[50px]" />
            </Link>
            <div className="flex flex-col items-end">
                <Link href="/intro" className="flex justify-end items-center w-full transition duration-300 ease-in-out  py-[11.2px] pl-4 group origin-right hover:scale-110">
                    <p className="text-[19px] group-hover:text-twnLinkHoverColor group-active:text-twnLinkHoverColor">Nõuded</p>
                    <QuestionIcon className="text-twnTextColor group-hover:text-twnLinkHoverColor h-5 ml-3"/>
                </Link>
                <Link href="/article" className="flex justify-end items-center w-full transition duration-300 ease-in-out  py-[11.2px] pl-4 group origin-right hover:scale-110">
                <p className="text-[19px] group-hover:text-twnLinkHoverColor group-active:text-twnLinkHoverColor">Artikkel</p>
                    <FileIcon className="text-twnTextColor group-hover:text-twnLinkHoverColor h-5 ml-3"/>
                </Link>
                <Link href="/list" className="flex justify-end items-center w-full transition duration-300 ease-in-out  py-[11.2px] pl-4 group origin-right hover:scale-110">
                    <p className="text-[19px] group-hover:text-twnLinkHoverColor group-active:text-twnLinkHoverColor">Tabel</p>
                    <TableIcon className="text-twnTextColor group-hover:text-twnLinkHoverColor h-5 ml-3"/>
                </Link>
                <Link href="/life" className="flex justify-end items-center w-full transition duration-300 ease-in-out  py-[11.2px] pl-4 group origin-right hover:scale-110">
                    <p className="text-[19px] text-end group-hover:text-twnLinkHoverColor group-active:text-twnLinkHoverColor">Game of life</p>
                    <PhotoIcon className="text-twnTextColor group-hover:text-twnLinkHoverColor h-5 ml-3"/>
                </Link>
            </div>
        </nav>
    )
}
