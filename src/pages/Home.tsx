import { Box } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import PictureBar from "../components/Picture";
import Section from "../components/Section";
import { NasaPictureOftheDay } from "../interfaces/PictureData";

const Home = () => {
    const [pictureOfTheDay, setPictureOfTheDay] =
        useState<NasaPictureOftheDay>();

    const fetchedData = async () => {
        const data = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setPictureOfTheDay(data.data);
    };

    useEffect(() => {
        fetchedData();
    }, []);

    return (
        <Box>
            <PictureBar picture={pictureOfTheDay} />
            <Section picture={pictureOfTheDay} />
        </Box>
    );
};

export default Home;
