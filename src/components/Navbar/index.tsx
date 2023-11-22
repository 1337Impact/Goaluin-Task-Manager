import LoginButton from "../LoginButton";

export default () => {
    return (
        <nav className="h-[70px]  w-full flex items-center justify-between px-4">
            <h1 className="text-2xl font-kranky">GoaluinTM</h1>
            <LoginButton />
        </nav>
    );
}