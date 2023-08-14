const Contact = () => {
    return (
        <div className="contact">
            <h1 className="font-bold text-zinc-400 text-center m-2" >Contact US</h1>
            <form >
                <div className="flex flex-col justify-center ">

                    <input type="input" placeholder="name" className="w-40 my-2 mx-auto rounded-lg p-2 text-zinc-400 bg-slate-600"></input>
                    <input type="input" placeholder="message" className="w-40 my-2 mx-auto rounded-lg p-2 text-zinc-400 bg-slate-600"></input>
                    <button className="bg-slate-600 w-fit px-2 rounded text-zinc-400 mx-auto">Submit</button>
                </div>
            </form>

        </div>

    )


}

export default Contact;