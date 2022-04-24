import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

const PictureBar = ({ picture }: { picture: any }) => {
    return (
        <Box>
            <Box bgImage={`url(${picture?.hdurl})`} sx={section}>
                <Text
                    fontWeight={700}
                    fontSize={{
                        base: "100px",
                        sm: "35px",
                        md: "70px",
                        lg: "90px",
                    }}
                >
                    Today's Picture
                </Text>
                <Text>Astronomy Picture of the Day</Text>
                <Text marginTop="10px">{picture?.date}</Text>
            </Box>
        </Box>
    );
};

const section = {
    w: "100vw",
    h: "100vh",
    bgRepeat: "no-repeat",
    bgSize: "cover",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

export default PictureBar;
