import appointment from "../../assets/images/appointment.png";

const Contact = () => {
   return (
      <section style={{ backgroundImage: `url(${appointment})` }}>
         <div className="py-16">
            <div className="text-center mb-10">
               <h2 className="text-xl font-bold text-primary">Contact Us</h2>
               <h3 className="text-4xl text-white">Stay connected with us</h3>
            </div>
            <div className="">
               <form className="grid gap-2.5 justify-items-center grid-cols-1">
                  <input
                     type="email"
                     placeholder="Email Address"
                     className="input w-full max-w-md"
                  />
                  <input
                     type="text"
                     placeholder="Subject"
                     className="input w-full max-w-md"
                  />
                  <textarea
                     className="textarea w-full max-w-md h-32"
                     placeholder="Your Message"
                  ></textarea>
                  <input type="submit" value="Submit" className="btn btn-primary text-white mt-9" />
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
