import React from 'react';

function OfficeSpace({ item }) {
  let colors = [];
  if (item.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

 const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  return (
    <div>
      {jsxatt}
      <h1>Name: {item.Name}</h1>
      <h3 className={colors.join(' ')}> Rent: Rs. {item.Rent}</h3>
      <h3> Address: {item.Address}</h3>
      <hr />
    </div>
  );
}

export default OfficeSpace;
