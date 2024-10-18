import React from 'react';

export default function About() {
  const accordionItems = [
    {
      id: 'One',
      title: 'Our Mission',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur, tenetur ducimus voluptas temporibus dignissimos laboriosam magnam eveniet recusandae iusto quis natus itaque doloremque provident vitae voluptate architecto officiis molestias maiores sunt! Impedit suscipit quo cupiditate ducimus error veritatis possimus hic quas quos aperiam, nihil officiis repellat, ad explicabo dolores.'
    },
    {
      id: 'Two',
      title: 'Our Vision',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae cupiditate, aperiam eum eligendi, obcaecati dolorem in, asperiores et veniam culpa soluta adipisci labore! Odio, labore. Aliquam ad reiciendis illo possimus ea vel dolorum, necessitatibus odio sed consectetur nam aperiam quae quam dolores optio quisquam et rem asperiores ipsum vitae.'
    },
    {
      id: 'Three',
      title: 'Our Values',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolore dolorum repellat facilis soluta vitae quisquam eaque? Consequuntur illo nam maxime iure tempora numquam cumque saepe odio est tempore repellendus atque quasi cupiditate veniam quisquam facere veritatis, accusantium iste debitis culpa. Doloremque perspiciatis adipisci voluptatum soluta doloribus architecto quam corrupti?'
    }
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="accordion w-100 mx-auto" id="accordionAbout" style={{maxWidth: '800px'}}>
          {accordionItems.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header" id={`panelsStayOpen-heading${item.id}`}>
                <button 
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#panelsStayOpen-collapse${item.id}`} 
                  aria-expanded={index === 0 ? 'true' : 'false'} 
                  aria-controls={`panelsStayOpen-collapse${item.id}`}
                  style={{backgroundColor: '#28a745', color: 'white'}}
                >
                  {item.title}
                </button>
              </h2>
              <div 
                id={`panelsStayOpen-collapse${item.id}`} 
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                aria-labelledby={`panelsStayOpen-heading${item.id}`}
              >
                <div className="accordion-body">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}