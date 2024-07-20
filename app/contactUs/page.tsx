
export default function ContactUs() {
    return (
        <>
        <div className="mt-5 w-[85%] md:w-[48%] mx-auto">
        <h2 className="pt-11 md:pt-16 text-center text-3xl font-semibold mb-5">ContactUs</h2>
        <form className="flex-col flex gap-3" action="POST">
            <input type="text" placeholder="Enter Your Name" className="border-2 h-12 placeholder:pl-5 cursor:pl-5"/>
            <input type="email" placeholder="Enter Email" className="border-2 h-12 placeholder:pl-5 cursor:pl-5"/>
            <textarea className="border-2 h-12 placeholder:pl-5" name="message" id="" placeholder="Message"></textarea>
            <button className="bg-black text-white py-4 px-9 text-xl">Submit</button>
        </form>
        </div>
        </>
    );
}