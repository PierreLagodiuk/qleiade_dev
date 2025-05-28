<?php
namespace Admin\Orchid\Fields;

use Orchid\Screen\Fields\Select;

class PlaceholderSelect extends Select
{
    /**
     * Insère une option placeholder désactivée en première position.
     *
     * @param string $label
     * @return $this
     */
    public function placeholder(string $label): self
    {
        // 1) Récupère les options déjà déclarées (ou empty array)
        $options = $this->get('options', []);

        // 2) Préfixe l'option vide en tête pour le placeholder
        $options = ['' => $label] + $options;
        $this->set('options', $options);

        // 3) Déclare l'attribut `disabled` et `selected` pour cette option
        //    afin qu'elle soit visible MAIS non sélectionnable par la suite
        $this->set('optionAttributes', [
            '' => [
                'disabled' => 'disabled',
                'selected' => 'selected',
            ],
        ]);

        // 4) Désactive la croix de clear
        $this->set('clearable', false);

        return $this;
    }
}
