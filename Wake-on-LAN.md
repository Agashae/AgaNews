# Wake-on-LAN (WoL)

## C'est quoi Wake-on-LAN ?

Wake-on-LAN (WoL) est une technologie qui permet de réveiller un ordinateur à distance en envoyant un signal spécial sur le réseau local, même si l'ordinateur est éteint.

### Comment ça fonctionne ?

1. Votre ordinateur reçoit l'électricité mais est en mode "veille profonde" ou "éteint"
2. La carte réseau reste active et écoute les messages spéciaux
3. Vous envoyez un "Magic Packet" depuis votre téléphone
4. L'ordinateur reçoit ce signal et se réveille instantanément

### Les conditions nécessaires

✅ **Ordinateur**
- Support de Wake-on-LAN (presque tous les PC/Mac modernes)
- Option WoL **activée** dans le BIOS/UEFI
- Carte réseau avec Ethernet (filaire) ou WiFi compatible

✅ **Réseau**
- Ordinateur et téléphone sur **le même réseau local (LAN)** OU
- Accès à travers Internet (si configuré correctement)

✅ **Alimentation**
- L'ordinateur **doit rester branché**
- Mode veille, hibernation, ou "low-power mode" acceptés

---

## 🚀 Comment configurer Wake-on-LAN ?

### Sur Windows

1. **Aller aux paramètres de la carte réseau**
   - `Panneau de configuration` → `Gestionnaire de périphériques`
   - Double-clic sur votre carte réseau
   - Onglet `Paramètres avancés`

2. **Activer Wake-on-LAN**
   - Chercher l'option `Wake on Magic Packet` ou `Magic Packet Enabled`
   - Mettre sur `Activé`

3. **Vérifier le BIOS**
   - Redémarrer l'ordinateur
   - Entrer le BIOS (généralement `F2`, `Del`, ou `F10`)
   - Chercher `Wake-on-LAN` ou `Power Management`
   - Mettre sur `Activé`

### Sur macOS

1. **Aller à Préférences Système** → **Économie d'énergie**
2. Cocher **Réveiller pour accès réseau**

### Sur Linux

```bash
# Vérifier que Wake-on-LAN est activé
ethtool eth0

# Activer Wake-on-LAN
sudo ethtool -s eth0 wol g
```

---

## 📱 Utiliser avec l'app "Wake Me Up"

Téléchargez l'app : **[Wake Me Up - Wake-on-LAN](https://apps.apple.com/us/app/wake-me-up-wake-on-lan/id1465416032?l=fr-FR)**

### Étapes d'utilisation

1. **Installer l'app** sur votre iPhone/iPad
2. **Ajouter votre ordinateur**
   - Nom de l'ordinateur (ex: "Mon Mac")
   - Adresse MAC (voir ci-dessous comment la trouver)
   - Adresse IP (optionnel)
   - Port (par défaut 7/9)

3. **Trouver l'adresse MAC de votre ordinateur**

   **Windows:**
   ```cmd
   ipconfig /all
   ```
   Chercher "Adresse physique"

   **macOS:**
   ```bash
   ifconfig | grep "ether"
   ```

   **Linux:**
   ```bash
   ip link show
   ```

4. **Envoyer un Magic Packet**
   - Ouvrir l'app "Wake Me Up"
   - Appuyer sur le bouton pour réveiller votre ordinateur
   - 💻 Votre ordinateur s'allume instantanément !

---

## 🔧 Cas d'usage courants

- **Accueil à distance** : Réveiller votre PC avant d'arriver chez vous
- **Économies d'énergie** : Laisser l'ordinateur éteint et le réveiller au besoin
- **Serveur personnel** : Activer votre serveur NAS à distance
- **Domotique** : Intégrer WoL dans vos routines domotiques

---

## ⚠️ Points importants

- ⚡ Wake-on-LAN fonctionne **uniquement sur le réseau local** par défaut
- 🔐 Pour l'accès à distance, configurez un VPN
- 🌐 Assurez-vous que votre pare-feu n'interfère pas
- 📡 Parfois, désactiver le WiFi sur l'ordinateur et utiliser l'Ethernet donne de meilleurs résultats

---

## 📚 Ressources supplémentaires

- [Wikipedia - Wake-on-LAN](https://en.wikipedia.org/wiki/Wake-on-LAN)
- [Support Apple - Réveiller votre Mac](https://support.apple.com/fr-fr/HT201960)
- [Microsoft - Activation réseau](https://learn.microsoft.com/en-us/windows-hardware/customize/power-settings/power-button-and-lid-settings-wake-on-magic-packet)

---

## 🤝 Contribution

Des questions ? Des améliorations à proposer ? Ouvrez une issue ou une pull request !

---

**Fabriqué avec ❤️ pour les amateurs de technologie**
