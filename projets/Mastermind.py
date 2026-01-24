# 1. Generer un code "secret" 
# 2. Permettre au joueur de faire une tentative
# 3. Verifier qu'on a devine les bonnes couleurs ou pas
# 4. Donner des indices
# 5. Dire si on a trouve ou non
# 6. Systeme de vies / d'essaies (laisser rejouer si pas trouve)

# Bonus: Ajouter un systeme de niveaux de difficultes
# Bonus: Ajouter des couleurs dans le terminal

# Librairie

import random



# Variables et Listes

couleurs = ["rouge","bleu","vert","jaune","blanc","orange","violet","noir"]

code_secret = random.choices(couleurs,k=4)

code_joueur = []



# Code



def generer_code_secret():
    couleurs = ["rouge","bleu","vert","jaune","blanc","orange","violet","noir"]
    #              0      1       2      3       4       5        6       7
    return code_secret



def choisir_code_joueur():
    code_joueur = []
    couleurs = ["rouge","bleu","vert","jaune","blanc","orange","violet","noir"]
    while len(code_joueur) < 4:
        couleur = input(f"Choisissez une couleur entre {couleurs}\n")
        if couleur in couleurs:
            code_joueur.append(couleur)
            print(f"code choisi = {code_joueur}")
        else:
            print("Réponse incorrecte")
    return code_joueur



def comparer_codes(code_joueur,code_secret):
    if code_joueur == code_secret:
        return True
    else:
        if code_secret[0] == code_joueur[0]:
            print("1e couleur juste")
        else:
            print("1e couleur fausse")
        if code_secret[1] == code_joueur[1]:
            print("2e couleur juste")
        else:
            print("2e couleur fausse")
        if code_secret[2] == code_joueur[2]:
            print("3e couleur juste")
        else:
            print("3e couleur fausse")
        if code_secret[3] == code_joueur[3]:
            print("4e couleur juste")
        else:
            print("4e couleur fausse")
        return False



def jeu():
    vie = 15
    secret = generer_code_secret()
    while vie > 0:
        combi_joueur = choisir_code_joueur()
        if comparer_codes(secret,combi_joueur) == True:
            print("Bravo! Vous avez gagné!")
            vie = 0
        else:
            vie -= 1
            if vie == 0:
                print("Il ne vous reste aucun essais")
            else:
                print("Le code secret ne correspond pas à votre choix.")
                print(f"Plus que {vie} essais")

##############################################################


jeu()
