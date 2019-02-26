import React, { Component } from 'react';
import Catalogue from './catalogue'
import './list-catalogue.css'


const tab=[
    {image:"http://modern.realhomes.io/wp-content/uploads/2017/06/property-01-exterior-680x510.jpg",
     title:"Villa in Hoolywood",
     description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
     surface:"120",
     prix: 210000 
    },
    {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-02-exterior-680x510.jpg",
     title:"Villa in Newyork",
     description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
     surface:"120",
     prix: 210000
    },
    {image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/ec/e9.jpg",
     title:"Villa in Boston",
     description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
     surface:"120",
     prix: 210000
    },
    {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior-680x510.jpg",
     title:"Villa",
     description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
     surface:"120",
     prix: 210000
    },
    {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-03-exterior-680x510.jpg",
     title:"Villa",
     description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
     surface:"120",
     prix: 210000
    },
    {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-02-exterior-680x510.jpg",
    title:"Villa in Newyork",
    description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
    surface:"120",
    prix: 210000
   },
   {image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/ec/e9.jpg",
    title:"Villa in Boston",
    description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
    surface:"120",
    prix: 210000
   },
   {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior-680x510.jpg",
    title:"Villa",
    description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
    surface:"120",
    prix: 210000
   },
   {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-02-exterior-680x510.jpg",
   title:"Villa in Newyork",
   description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
   surface:"120",
   prix: 210000
  },
  {image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/ec/e9.jpg",
   title:"Villa in Boston",
   description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
   surface:"120",
   prix: 210000
  },
  {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior-680x510.jpg",
   title:"Villa",
   description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
   surface:"120",
   prix: 210000
  },
  {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-02-exterior-680x510.jpg",
  title:"Villa in Newyork",
  description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
  surface:"120",
  prix: 210000
 },
 {image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/ec/e9.jpg",
  title:"Villa in Boston",
  description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
  surface:"120",
  prix: 210000
 },
 {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior-680x510.jpg",
  title:"Villa",
  description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
  surface:"120",
  prix: 210000
 },
 {image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-02-exterior-680x510.jpg",
 title:"Villa in Newyork",
 description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
 surface:"120",
 prix: 210000
},
{image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/ec/e9.jpg",
 title:"Villa in Boston",
 description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
 surface:"120",
 prix: 210000
},
{image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior-680x510.jpg",
 title:"Villa",
 description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
 surface:"120",
 prix: 210000
},
{image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-02-exterior-680x510.jpg",
title:"Villa in Newyork",
description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
surface:"120",
prix: 210000
},
{image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/ec/e9.jpg",
title:"Villa in Boston",
description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
surface:"120",
prix: 210000
},
{image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior-680x510.jpg",
title:"Villa",
description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
surface:"120",
prix: 210000
},
{image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-02-exterior-680x510.jpg",
title:"Villa in Newyork",
description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
surface:"120",
prix: 210000
},
{image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/05/96/ec/e9.jpg",
title:"Villa in Boston",
description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
surface:"120",
prix: 210000
},
{image:"http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior-680x510.jpg",
title:"Villa",
description:"Enchanting three bedroom, three bath home with spacious one bedroom,…",
surface:"120",
prix: 210000
}
   
]
class ListeCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="toplist">
            <div>
            <center>
           
                <p className="recent">Recent</p>
                <p className="properties">Properties</p>
                <p className="check">Check out some of our latest properties.</p>
            </center>
            </div>
             <div className="row ctlg container-fluid">
        { tab.map((el,index)=><div className="col-lg-4 col-md-6 col-sm-12 ctlg1"><Catalogue item={el} key={index}  /> 
        </div>)}
        
      </div>
      </div> );
    }
}
 
export default ListeCatalogue;