const categorieModel = (sequelize, DataTypes) => {
    const categorie = sequelize.define("categorie", {
        categorie: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // permet de ne pas generer les colonnes créer par sequelize
        createdAt: false,
        updatedAt: false,
    })

    return categorie
}

module.exports = categorieModel