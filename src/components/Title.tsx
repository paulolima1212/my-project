export default function Title(props) {
    return(
        <div className="flex flex-col justify-center">
            <h1 className="py-5 px-2"  >
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}