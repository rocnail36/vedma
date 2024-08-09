
export interface HowWork  {
  title:string,
  titleIcons:string,
  items: ItemCard[],
  info?:string

}


export interface ItemCard  {
  type:string,
  src: string, 
  text?: string,
  size?: [number,number]
}



export let galeryImages = [
    {image: '/galery-1.jpg'},
    {image: '/galery-2.jpg'},
    {image: '/galery-3.jpg'},
    {image: '/galery-4.jpg'},
    {image: '/galery-5.jpg'},
    {image: '/galery-6.jpg'}
  ];
  

  export let howWork:HowWork[] = [

    {
      title: "Metodos de pago",
      titleIcons: "fa-dollar-sign",
      items: [
         {type:"icon", src: "fa-money-bill-wave", text: "efectivo"},
         {type:"icon", src: "fa-mobile-screen-button", text: "pago movil"},
         {type:"icon-image",src: "/paypal.png",text: "paypal", size:[60,60]},
         {type: "icon-image",src: "/reserve.png",text: "reserve",size:[30,30]}
        ],
      info: "Paypal 10% + de comision"
    },
    {
      title: "Delivery",
      titleIcons: "fa-motorcycle",
      items:[
        {type:"icon",src:"fa-calendar-days", text: "lunes-viernes"},
        {type:"icon",src:"fa-clock", text:"8AM-6PM"}
      ]
    },
    {
      title: "Envios a nivel nacional",
      titleIcons: "fa-truck-fast",
      items: [
        {type: "icon-image", src: "/tealcal.png" ,size:[60,50]},
        {type:"icon-image",src: "/mrw.png",size:[100,35]},
        {type:"icon-image", src: "/zoom.png", size:[100,40]}
      ],
    }

  ]