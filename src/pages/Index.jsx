import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, Radio, RadioGroup, Stack, Text, useToast } from "@chakra-ui/react";

const questions = [
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
    answer: "Blue Whale",
    image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibHVlJTIwd2hhbGV8ZW58MHx8fHwxNzA5NDkyMjUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    question: "What animal is known to have the longest lifespan?",
    options: ["Galapagos Tortoise", "Elephant", "Blue Whale", "Parrot"],
    answer: "Galapagos Tortoise",
    image: "https://images.unsplash.com/photo-1562564774-b70a879cbf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYWxhcGFnb3MlMjB0b3J0b2lzZXxlbnwwfHx8fDE3MDk0OTIyNTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    question: "Which animal is known to laugh?",
    options: ["Hyena", "Rat", "Dolphin", "Dog"],
    answer: "Hyena",
    image: "https://images.unsplash.com/photo-1595380785068-8608441faa8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXVnaGluZyUyMGh5ZW5hfGVufDB8fHx8MTcwOTQ5MjI1MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more questions as needed
];

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const toast = useToast();

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Wrong!",
        description: `The correct answer was ${questions[currentQuestion].answer}.`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    }
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Container centerContent py={8}>
      <Heading mb={4}>Animal Quiz Game</Heading>
      <Box w="full" maxW="md" p={5} borderWidth="1px" borderRadius="lg">
        <Flex direction="column" align="center">
          <Image src={questions[currentQuestion].image} alt="Quiz Image" borderRadius="md" boxSize="200px" objectFit="cover" mb={4} />
          <Text fontSize="lg" fontWeight="semibold" mb={4}>
            {questions[currentQuestion].question}
          </Text>
          <RadioGroup onChange={handleOptionChange} value={selectedOption}>
            <Stack direction="column">
              {questions[currentQuestion].options.map((option, index) => (
                <Radio key={index} value={option}>
                  {option}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <Button colorScheme="blue" mt={6} onClick={handleNextQuestion} isDisabled={!selectedOption}>
            Next
          </Button>
          {currentQuestion === questions.length - 1 && (
            <Text mt={4}>
              Your score: {score} / {questions.length}
            </Text>
          )}
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
