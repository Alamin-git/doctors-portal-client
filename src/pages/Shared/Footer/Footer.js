
const Footer = () => {
   const today = new Date();
   return (
      <footer className=" mx-11 bg-[url('/src/assets/images/footer.png')] bg-cover">
         <div className="footer py-20 justify-between">
         <div>
            <span className="footer-title text-lg">Services</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
         </div>
         <div>
            <span className="footer-title text-lg">ORAL HEALTH</span>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
         </div>
         <div>
            <span className="footer-title text-lg">OUR ADDRESS</span>
            <a className="link link-hover">New York - 101010 Hudson</a>
         </div>
         </div>
         <div className="footer-center p-4">
            <p>Copyright &copy; {today.getFullYear()} All Rights Reserved</p>
         </div>
      </footer>
   );
};

export default Footer;
