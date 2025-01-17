import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({
  title = "Toronto Pest Control Services",
  description = "Get reliable pest control services in Toronto! Our experts provide eco-friendly solutions to eliminate pests from your home or business. We specialize in safe and effective removal of rodents, insects, bed bugs, and more. Serving residential and commercial properties across Toronto with guaranteed satisfaction. Call now for a free consultation!",
  keywords = "Toronto pest control, pest removal Toronto, eco-friendly pest control, residential pest control, commercial pest control"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default MetaTags;
