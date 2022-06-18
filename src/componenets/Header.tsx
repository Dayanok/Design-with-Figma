import React from 'react';

export function Header() {
  return (
      <div className="md:flex md:flex-col">
     
      <div className="text-black flex px-5 pt-8 pb-5 justify-between item-center">
        <div className="text-md"><img src="/images/Vector.png" alt="vector"/></div>
        <div className="text-xl">My Finest Moments</div>
        <div className="text-md"> <img src="/images/Vector1.png" alt="vector1"/></div>
    </div>

    <div className="bg-[#BCD2EE] py-2 px-5 flex gap-3">
      <div>
        <img src="/images/Ellipse.png" alt="elipse"/>
        <div className="text-[10px] text-center">Eiman</div>
      </div>

      <div>
        <img src="/images/Ellipse1.png" alt="elipse1" />
        <div className="text-[10px] text-center">Dena</div>
      </div>

      <div>
        <img src="/images/Ellipse2.png" alt="elipse2"/>
        <div className="text-[10px] text-center">Taleen</div>
      </div>

      <div>
        <img src="/images/Ellipse3.png" alt="elipse3"/>
        <div className="text-[10px] text-center">Nadeen</div>
      </div>

      <div>
        <img src="/images/Ellipse.png" alt="elipse4"/>
        <div className="text-[10px] text-center">Sarah</div>
      </div>

    </div>
      </div>
    
  );
}

