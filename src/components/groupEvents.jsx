export default function GroupEvents() {
    return(<>
    <section className="py-12">
        <header className="mb-6">
            <h3 className="font-semibold text-3xl">Group Events</h3>
            <p className="text-[#00F0FF]">Here you will find latest events from active groups.</p>
        </header>
        <table className="w-full overflow-hidden text-[.8em] sm:text-[1em]">
            <thead className="">
                <tr className=" text-left bg-[#345A5A] rounded-full">
                    <th className="uppercase  rounded-l-lg p-2">Operation</th>
                    <th className="uppercase p-2"> ID</th>
                    <th className="uppercase p-2">Date and Time</th>
                    <th className="uppercase rounded-r-lg p-2">Block</th>
                </tr>
            </thead>
            <tbody>
                <tr className="nunito ">
                    <td className="p-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                    <td className="p-2 py-4">1.11.167382826</td>
                    <td className="p-2 py-4"><span className="">21/02/2056</span>, <span className="">12:45:57</span></td>
                    <td className="p-2 py-4">25,719,012</td>
                </tr>
                <tr className="nunito ">
                    <td className="p-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                    <td className="p-2 py-4">1.11.167382826</td>
                    <td className="p-2 py-4"><span className="">21/02/2056</span>, <span className="">12:45:57</span></td>
                    <td className="p-2 py-4">360</td>
                </tr>
                <tr className="nunito ">
                    <td className="p-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                    <td className="p-2 py-4">1.11.167382826</td>
                    <td className="p-2 py-4"><span className="">21/02/2056</span>, <span className="">12:45:57</span></td>
                    <td className="p-2 py-4">360</td>
                </tr>
                <tr className="nunito ">
                    <td className="p-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                    <td className="p-2 py-4">1.11.167382826</td>
                    <td className="p-2 py-4"><span className="">21/02/2056</span>, <span className="">12:45:57</span></td>
                    <td className="p-2 py-4">360</td>
                </tr>
                <tr className="nunito ">
                    <td className="p-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                    <td className="p-2 py-4">1.11.167382826</td>
                    <td className="p-2 py-4"><span className="">21/02/2056</span>, <span className="">12:45:57</span></td>
                    <td className="p-2 py-4">360</td>
                </tr>                
            </tbody>
        </table>
    </section>
    </>
       

    );
}