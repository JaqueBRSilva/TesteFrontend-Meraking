import { ScrollView, StyleSheet } from "react-native";
import ChatsList from "../../components/ChatsList";

const Chat = () => {
    return (
        <>
            <ScrollView>

                <ChatsList
                    userName="James"
                    userPhoto={{ uri: 'https://s3-alpha-sig.figma.com/img/3413/4555/ee1d5e8149ec891d092dbb246ae04aec?Expires=1690761600&Signature=JRQL9JC2ceeJ6xva~bdYXVvX63o66xwt8Wvq3I6NrLu2smuAtSwZ8O9GjH15EdRTt9th~QwGMt61nodPauC~XDG82zGdDn3Hnh9O~xe-eoQCm2Osq6Xff2joN4uJFDXg3borhp5uGUQfHR~BDEMN7tCgzgZTn6RADsnkWLhf-XUum3FGTCmJGWqcUgbIErDvIlE~0rFMi45vqbA0Hm4UA5mvvLCFiu4dqFNmseAfjF3D00EJqOf-D5QVQWxWnDT4FXUlLmz-yZXIf~SvInSScHC9tpAQiwlC~lPMutOAGAbglHP8c6Z6Pzeu0FQdgHLtiLmBclfNboNXKXGGWlKM9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                    textLine={"Thank you! That was very helpful!"}
                />

                <ChatsList
                    userName="Will Kenny"
                    userPhoto={{ uri: 'https://s3-alpha-sig.figma.com/img/4133/3e90/c4e76138cf8b06b4700109d112563b79?Expires=1690761600&Signature=e7Mxy9yHsKJenJWT9-gSURY1VSNumpUO53r9X7tWRIZk1r46zaqYSc9hW3K7H9VwJOqWEjHBoucEUK19zdymaAaf9LF7dlodJD6316QVoWpbaNS3neIfLp6oaJ7MPniT8RrVM0XmiD6LJGKENU4YGhzDLXks4sSXVq8glZQaDflIFlbbNiAJ5rj7mR2taXmsl6oPuoEdZo2uepjgceiTnVHBZFF74sFhAWpxp2CLbZAL3sV15QvsBVdHo9KnnUb98n6dQ4vaViMyC00yNr0o71~73-a4-eQyRXJnRgGFjRom7xwJPakmJWVvE7JsLNuqdDTFRYtoFSSFabBV7xXrHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                    textLine={"I know... I’m trying to get the funds."}
                />

                <ChatsList
                    userName="Beth Williams"
                    userPhoto={{ uri: 'https://s3-alpha-sig.figma.com/img/6f4a/e089/b252688e26d038f2271ab651705640e9?Expires=1690761600&Signature=HaWBUzMpSWpgz-7Jr8ZIkbS1uzEVdu9ELuYdNplPrmNv0LFFB2Jrny8iDdvBmjK2gsV5FBiq5kXnM6ViD0ZkFq7adRu2g1v6JTuWIDG2YKNpV0fgbBx-Mh2sTLCDaFkVsElCieU0Dy71XLxkckd~JuLpYGPMd5aQVNjiqk7Iag0gJkCScQ3-0vDyW4bVco2gOOBlKoAzn8e5g7AhB4d1BopWadsQaKNNAcfRYbmX5MDrMccdcfTf2PbCNQ2cXrhjSNSDOrmHCViF715hKjHHII34nbtD4o~Rx5ejftAj8Sh66rl~Jx195dArY3XMGWge3MgWUooeOXhtlo31JHrXiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                    textLine={"I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm..."}
                />

                <ChatsList
                    userName="Rev Shawn"
                    userPhoto={{ uri: 'https://s3-alpha-sig.figma.com/img/9494/ed1b/997f19ca25e99aaee58cbaa7ed86d004?Expires=1690761600&Signature=pDEbfQhYYM~TvMgnYEX0Z0dnnultP7jfj30L7CdjZF0DRl-k-IQQ7KFbUjyGsqe4QtqgZAO6mJlmQ87SrJiXeinn57EZjGdeXh8eZiopov9UC8Gf8Zqf6ZCzdq9YeGviIbGYhYQQVpSDBiGZdC8v-0FBYC~HS1hl8qhOncrFI0yJM0NYAWNJJSnf2L25MmtNFM7tPwi2PgKWUZcwTgB~T~M2ZwzLO5HQsCxt3Le1o1INMDG4c5JDLVHM~zoeXe9LDKl9GZ~qAlzG-q3mfQhzBUjqQ3fLsVmHfvZQYy6Ed4dn9k7KuVk~Eyy3ZIM8foZ0eo4CmWB4ZYkefVf56WZP3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }}
                    textLine={"Wanted to ask if you’re available for a portrait shoot next week."}
                />

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})

export default Chat;
