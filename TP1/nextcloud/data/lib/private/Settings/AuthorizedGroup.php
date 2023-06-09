<?php

/**
 * @copyright Copyright (c) 2021 Carl Schwan <carl@carlschwan.eu>
 *
 * @author Carl Schwan <carl@carlschwan.eu>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

namespace OC\Settings;

use OCP\AppFramework\Db\Entity;

/**
 * @method setGroupId(string $groupId)
 * @method setClass(string $class)
 * @method getGroupId(): string
 * @method getClass(): string
 */
class AuthorizedGroup extends Entity implements \JsonSerializable {
	/** @var string $group_id */
	protected $groupId;

	/** @var string $class */
	protected $class;

	public function jsonSerialize(): array {
		return [
			'id' => $this->id,
			'group_id' => $this->groupId,
			'class' => $this->class
		];
	}
}
