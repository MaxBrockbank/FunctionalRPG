Theme: Classic Fantasy (Wizards, Knights, etc)

To Do: Make monster/enemy, create combat system (option: click makes a comparison of enemy stats to user stats and generates an outcome)

Create a character creating function factory. //changeState fxn
Create storeState function.
Create 2+ character types via composition.

Attributes/Stats:
Level / Health / Combat Power (CP) / Magic Power (MP)

Functions that affect character attributes:
LevelUp: Add 1 to Level, modify Health, CP, and MP by 1.2

//storeState == plant, its going to initialize the values, const initalState = storeState(initialValues)
//changeState can have different "jobs" can changeNumberState, changeStringState

In Intermediate JavaScript, you had the opportunity to build your own RPG using object-oriented techniques. Try building another RPG - this time using functional techniques such as composition. You may also choose to refactor an RPG you've already started working on. Refactoring object-oriented code to functional code can be a great way to improve your skills.

An RPG (Role Playing Game) is a game where players assume the roles of characters in a fictional world. Build and fully unit test the business logic for a Medieval Role Playing Game (or another genre that you prefer: sci-fi, cyberpunk, '80's high school).

Logic could include the following:

Character creation: Use composition to generate different character types. Be creative with your character types... warriors, wizards, scientists, prom queen... whatever! Characters should have specific attributes. For instance, in a medieval RPG, characters might have strength and intelligence attributes among others. In an '80's high school RPG, characters might have snark and charm. You can add and even update these attributes using composition.

Battle system: Many RPGs have a battle system so characters can fight monsters, though that could just as easily be a high school “battle” system where the prom queen has a dance-off with the theater aficionado. Determine conditions for "winning" a battle, whether that's defeating monsters (with swords and spells doing damage), accumulating dance-off style points, or any other system you think of.

Level up: Determine a leveling system. Characters should be able to go from Level 1 to Level 2 and so on. Generally each level comes with new abilities. How do characters level up in your game? What attributes and powers do they gain? Does their strength go up or do they learn new spells? You will need to use some object-oriented programming to complete this objective - characters can be individual objects with their own set of attributes.

Inventory: Characters should be able to have items that enhance their abilities. Maybe the Magic Armor increases their defense power or legwarmers increase their dance-off ability. Create a limit to the number of items a character can have. Characters should be able to add, drop, buy and sell items.

Feel free to build out your RPG as you see fit. Keep in mind that incorporating some object-oriented principles are okay, but try to use functional programming where possible.
