class PersonOrg:
    def __init__(self, name: str, id_: int, number: str) -> None:
        self.name = name
        self.id_ = id_
        self.number = number

    def person_list(self) -> str:
        return f"Id: \033[32m{self.id_}\033[m \nNome: \033[32m{self.name}\033[m \nTelefone: \033[32m{self.number}\033[m"


person = PersonOrg('pessoa', 0, "(00) 000 000000")
print(person.person_list())