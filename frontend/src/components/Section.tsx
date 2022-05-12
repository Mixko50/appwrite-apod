import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

const Section = ({ picture }: { picture: any }) => {
    return (
        <Box sx={setBox}>
            <Box sx={section}>
                <Box
                    sx={pictureCover}
                    bgImage={`url(${picture?.hdurl})`}
                    w={{ lg: "1000px", md: "700px", sm: "360px" }}
                    h={{ lg: "550px", md: "400px", sm: "250px" }}
                />
                <Box margin="10px 10px">
                    <Text
                        fontSize={{
                            lg: "30px",
                            md: "20px",
                            sm: "15px",
                        }}
                        fontWeight={600}
                        textAlign="center"
                        color="#4A5568"
                    >
                        {picture?.title}
                    </Text>
                </Box>
                <Box margin="20px 20px">
                    <Text
                        fontSize={{
                            lg: "25px",
                            md: "18px",
                            sm: "15px",
                        }}
                        fontStyle="italic"
                        color="#4A5568"
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
                        {picture?.explanation}"
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

const setBox = {
    w: "100%",
    h: "auto",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
};

const section = {
    w: "100%",
    maxWidth: "1200px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "40px",
};

const pictureCover = {
    margin: "30px",
    borderRadius: 12,
    boxShadow: "-2px 1px 41px -4px rgba(0,0,0,0.75)",
    bgRepeat: "no-repeat",
    bgSize: "cover",
    bgPosition: "center",
};

export default Section;
