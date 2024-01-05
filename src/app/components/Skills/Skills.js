import { Button, Grid, Group, NumberFormatter, Progress, Text, Title } from "@mantine/core";
import './Skills.css';
import { IconHeartHandshake } from "@tabler/icons-react";
import { usePlausible } from "next-plausible";

const skills = [
    {
        "name": "HTML",
        "color": "red",
        "percentage": 100
    },
    {
        "name": "CSS",
        "color": "var(--mantine-color-indigo-7)",
        "percentage": 90
    },
    {
        "name": "Javascript",
        "color": "yellow",
        "percentage": 100
    },
    {
        "name": "Node.js",
        "color": "green",
        "percentage": 100
    },
    {
        "name": "React",
        "color": "cyan",
        "percentage": 80
    },
    {
        "name": "Java",
        "color": "orange",
        "percentage": 70
    },
    {
        "name": "C# (with Unity)",
        "color": "grape",
        "percentage": 75
    },
    {
        "name": "C++",
        "color": "blue",
        "percentage": 50
    },
    {
        "name": "Python",
        "color": "var(--mantine-color-yellow-4)",
        "percentage": 30
    },
    {
        "name": "Markdown",
        "color": "var(--mantine-color-dark-9)",
        "percentage": 95
    },
]

export default function Skills() {
    const plausible = usePlausible()

    return (
        <>
            <Grid>
                <Grid.Col span={{ base: 12, sm: 7 }}>
                    <Text size="xl" c="var(--mantine-primary-color-5)">My Skills</Text>
                    <Title>Why Hire Me For Your Next <Text span inherit c="var(--mantine-primary-color-5)">Project</Text>?</Title>
                    <Text>
                        I am a skilled developer with expertise in web, software, Minecraft plugin, and game development.
                        With a solid background and extensive experience in these areas, I offer a unique combination of technical proficiency and creative problem-solving skills to every project.
                        My commitment to staying current with the latest technologies ensures that I deliver high-quality, innovative solutions that meet and exceed expectations.
                        Hiring me means bringing on board a proactive and adaptable professional committed to delivering exceptional results in software and game development.
                    </Text>
                    <Button size="md" className="hire" leftSection={<IconHeartHandshake />} onClick={() => {
                        window.$chatwoot.toggle();
                        plausible('chat-open', { props: { context: 'skills' } })
                    }}>Hire Now!</Button>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 5 }}>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className="skill">
                                <Group justify="space-between">
                                    <Text>{skill.name}</Text>
                                    <NumberFormatter suffix="%" value={skill.percentage} />
                                </Group>
                                <Progress color={skill.color} value={skill.percentage} />
                            </div>
                        ))
                    }
                </Grid.Col>
            </Grid>
        </>
    )
}