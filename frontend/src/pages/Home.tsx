import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import PictureBar from "../components/Picture";
import Section from "../components/Section";
import { NasaPictureOftheDay } from "../interfaces/PictureData";

const Home = () => {
    const [pictureOfTheDay, setPictureOfTheDay] =
        useState<NasaPictureOftheDay>();

    const [othersDay, setOthersDay] = useState<NasaPictureOftheDay[]>([]);

    const fetchedData = async () => {
        const data = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setPictureOfTheDay(data.data);
    };

    const fetchedOthersDayData = async () => {
        const data = await axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/api/all`
        );
        setOthersDay(data.data);
    };

    const setNewData = (index: number) => {
        if (index >= 0) {
            setPictureOfTheDay(othersDay[index]);
        } else {
            fetchedData();
        }
    };

    useEffect(() => {
        fetchedData();
        fetchedOthersDayData();
    }, []);

    return (
        <Box sx={section}>
            <PictureBar picture={pictureOfTheDay} />
            <Section picture={pictureOfTheDay} />
            <Box sx={sub_section}>
                <Box sx={selectSection}>
                    <Select
                        placeholder="Select the other day"
                        onChange={(v) => {
                            setNewData(parseInt(v.target.value));
                        }}
                    >
                        <option value={-1}>Today</option>
                        {othersDay
                            .filter(
                                (_, index) => index !== othersDay.length - 1
                            )
                            .map((data, index) => {
                                return (
                                    <option value={index}>
                                        ({data.date}) {data.title}
                                    </option>
                                );
                            })}
                    </Select>
                </Box>
            </Box>
        </Box>
    );
};

const section = {
    marginBottom: "50px",
};

const selectSection = {
    w: "100%",
    maxWidth: "500px",
    textAlign: "center",
};

const sub_section = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export default Home;
