export default function App() {
   return (
     <div>
       <div className="container">
         <main>
           <p className="devinfo-container">
             <span className="error-code">
               <strong>404</strong>: NOT_FOUND
             </span>
             <span className="devinfo-line">
               Code: <code>DEPLOYMENT_NOT_FOUND</code>
             </span>
             <span className="devinfo-line">
               ID: <code>arn1::768h2-1760706213330-904d9d28a094</code>
             </span>
           </p>
           <a
             href="https://vercel.com/docs/errors/platform-error-codes#deployment_not_found"
             className="owner-error"
           >
             <div className="note">
               This deployment cannot be found. For more information and troubleshooting, see our documentation.
             </div>
           </a>
         </main>
       </div>
     </div>
   );
}