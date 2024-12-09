import { Box, Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";

const ProductCard = ({ products }) => {
  console.log(products);
  return (
    <Box sx={{ display : "flex", flexWrap: "wrap", gap: 3}}>
      {products.map((prod) => (
        <Card sx={{ maxWidth: 345 }} key={prod.id}>
          <CardMedia
            sx={{ height: 200, objectFit: "contain", objectPosition: "center" }}
            image={prod.image}
            title={prod.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {prod.description}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      ))}
    </Box>
  );
};

export default ProductCard;
