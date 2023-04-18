

import React from 'react'
import logo from "../../assets/images/logo.png";

const Footer = () => {
    const navigation = {
       
        support: [
          { name: 'Contact', href: '/contact' },
        ],

        Pricing : [
          {name :'Pricing' , href : '/pricing'},
        ],
        company: [
          { name: 'About', href: '/' },
        ],
        legal: [
          { name: 'Support', href: '/support' },
          { name: 'Privacy', href: '/privacy' },

        ],
      }
  return (

  //   <footer className="bg-white border" aria-labelledby="footer-heading">
  //   <div className="mx-auto max-w-7xl px-6 py-8 sm:py-8 lg:px-8 lg:py-8">
  //     <div className="xl:grid xl:grid-cols-3 xl:gap-8">
  //       <img
  //         className="h-12"
  //         src={logo}
  //         alt="Company name"
  //       />
  //       <div className="mt-16 grid grid-cols-2 gap-6 xl:col-span-2 xl:mt-0">
  //         <div className="md:grid md:grid-cols-1 md:gap-6">
            
  //           <div className="mt-10 md:mt-0">
  //             <h3 className="text-sm font-semibold leading-6 text-primary">Support</h3>
  //             <ul role="list" className="mt-6 space-y-4">
  //               {navigation.support.map((item) => (
  //                 <li key={item.name}>
  //                   <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
  //                     {item.name}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
           
  //         </div>
  //         <div className="md:grid md:grid-cols-2 md:gap-8">
  //         <div>
  //             <h3 className="text-sm font-semibold leading-6 text-primary">Company</h3>
  //             <ul role="list" className="mt-6 space-y-4">
  //               {navigation.Pricing.map((item) => (
  //                 <li key={item.name}>
  //                   <a href={item.href} className="text-sm leading-6 text-secondary">
  //                     {item.name}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
            
  //           <div>
  //             <h3 className="text-sm font-semibold leading-6 text-primary">Pricing</h3>
  //             <ul role="list" className="mt-6 space-y-4">
  //               {navigation.company.map((item) => (
  //                 <li key={item.name}>
  //                   <a href={item.href} className="text-sm leading-6 text-secondary">
  //                     {item.name}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //           <div className="mt-10 md:mt-0">
  //             <h3 className="text-sm font-semibold leading-6 text-primary">Legal</h3>
  //             <ul role="list" className="mt-6 space-y-4">
  //               {navigation.legal.map((item) => (
  //                 <li key={item.name}>
  //                   <a target='_blank' href={item.href} className="text-sm leading-6 text-secondary">
  //                     {item.name}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </footer>
  <footer class="bg-white border dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <div class="flex items-center">
                  <img src={logo} class="h-12 mr-3" alt="FlowBite Logo" />
                 
              </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">Company</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/about" class="hover:underline">About</a>
                      </li>
                      <li>
                          <a href="/contact" class="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">Pricing</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/pricing" class="hover:underline ">Pricing</a>
                      </li>
                     
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-primary uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a  target='_blank' href="/privacy-policy" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a target="_blank" href="/termsofservice" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</footer>


 
  )
}

export default Footer
