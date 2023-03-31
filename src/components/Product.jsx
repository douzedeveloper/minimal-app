import { styled } from "@mui/material/styles";
import { Paper, IconButton, Button } from "@mui/material";
import { Box } from "@mui/system";

const Img = styled("img")({
  width: 100,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

const H2 = styled("h2")({
  fontSize: "1rem",
});

const P = styled("p")({
  fontSize: "0.8rem",
});

export default function Product({ data, addToCart }) {
  return (
    <Paper
      key={data.id}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        overflow: "hidden",
        mt: 3,
        border: "1px solid #6a3b9914"
      }}
    >
      <Img src={data.image} alt="img" />
      <Box sx={{ flexGrow: 1 }}>
        <H2>{data.title}</H2>
        <P>{data.description.slice(0, 50)}...</P>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" color="success" onClick={() => addToCart(data.id)}> Añadir</Button>
        </div>
      </Box>
      <Box component="p" sx={{ mr: 1, fontWeight: 'bold' }}>
        {data.price.toFixed(2) + '$'}
      </Box>
    </Paper>
  );
}