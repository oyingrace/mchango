export default function GroupDesc() {
    return(<>
    <section className="py-12 w-[50%]">
        <header className="mb-6">
            <h3 className="font-semibold text-3xl text-[#00F0FF]">Group Description</h3>
        </header>
        <p className="text-justify mb-8">Welcome to DelwareSavers, a community of forward-thinking individuals committed to improving our financial future jointly through bitcoin savings and investment. Our goal is straightforward: to pool our resources, contribute on a regular basis, and watch our savings grow as we explore the exciting world of cryptocurrencies.</p>
        <p className="text-justify">Why Should You Join DelwareSavers?</p>
        <ul className="text-justify list-disc">
            <li className="">Collaborate with like-minded individuals to achieve financial growth.</li>
            <li className="">Leverage the power of group contributions to access new investment opportunities</li>
            <li className="">Enjoy a disciplined and consistent approach to saving and investing in the crypto space.</li>
            <li className="">Share insights, strategies, and updates as we work together towards our goals</li>    
        </ul>
        <button className="bg-[#098787] text-black flex gap-2 items-center p-4 rounded-lg m-auto">Join Group <svg width="16" height="16" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.586 0.598024C15.9611 0.223082 16.4697 0.0124512 17 0.0124512C17.5303 0.0124512 18.0389 0.223082 18.414 0.598024L27.414 9.59802C27.7889 9.97308 27.9996 10.4817 27.9996 11.012C27.9996 11.5424 27.7889 12.051 27.414 12.426L18.414 21.426C18.0368 21.7903 17.5316 21.9919 17.0072 21.9874C16.4828 21.9828 15.9812 21.7725 15.6104 21.4017C15.2395 21.0308 15.0292 20.5292 15.0247 20.0048C15.0201 19.4804 15.2217 18.9752 15.586 18.598L21 13.012H2C1.46957 13.012 0.960859 12.8013 0.585786 12.4262C0.210714 12.0512 0 11.5425 0 11.012C0 10.4816 0.210714 9.97288 0.585786 9.59781C0.960859 9.22274 1.46957 9.01202 2 9.01202H21L15.586 3.42602C15.2111 3.05097 15.0004 2.54235 15.0004 2.01202C15.0004 1.4817 15.2111 0.973079 15.586 0.598024Z" fill="black"/>
        </svg></button>       
    </section>
    </>
       

    );
}