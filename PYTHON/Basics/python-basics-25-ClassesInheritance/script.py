# PARENT CLASS DECLARATION

class Person:
    def __init__(self, name):
        self.name = name

    def move(self):
        print(f"{self.name} moves 3 paces")

    def rest(self):
        print(f"{self.name} Gains 4 health points")


# CHILD CLASS INHERITANCE
class Doctor(Person):
    def heal(self):
        print(f"Dr. {self.name} heals you")


class Fighter(Person):
    def fight(self):
        print(f'{self.name} punches you to death')

    def move(self):
        print(f'{self.name} moves 10 paces')


class Wizard(Doctor, Fighter):
    def cast_spell(self):
        print(f'Wizard {self.name} applies magicka into enemy')

    def heal(self):
        print(f"Wizard {self.name} heals you 100 points")


# INSTANCE CREATION

character_1 = Person("John")
character_1.move()

doctor_1 = Doctor("Mario")
doctor_1.move()
doctor_1.heal()

fighter_1 = Fighter("Mohammed")
fighter_1.move()
fighter_1.fight()

wizard_1 = Wizard("Marvell")
wizard_1.move()
wizard_1.cast_spell()
wizard_1.heal()
wizard_1.fight()
