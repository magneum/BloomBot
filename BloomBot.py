from colorama import Fore, Style
from dotenv import dotenv_values
from transformers import pipeline, HfApi

env_vars = dotenv_values(".env")

api = HfApi()
api.token = env_vars.get("HUGGING_FACE_TOKEN")
model = api.model_tokenizer_pipeline("gpt2")
chatbot = pipeline("text-generation",
                   model=model["model"], tokenizer=model["tokenizer"])

while True:
    try:
        user_input = input("User: ").strip()
        if user_input.lower() == "exit":
            break
        response = chatbot(user_input)[0]['generated_text'].strip()
        print(Fore.GREEN + "Chatbot:", response + Style.RESET_ALL)
    except KeyboardInterrupt:
        print("\nExiting...")
        break
    except Exception as e:
        print(Fore.RED + "Error:", str(e) + Style.RESET_ALL)
